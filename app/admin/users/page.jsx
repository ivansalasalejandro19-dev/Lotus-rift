"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import Link from "next/link";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const snap = await getDocs(collection(db, "pickems"));

    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    data.sort((a, b) => (b.score || 0) - (a.score || 0));

    setUsers(data);
  }

  async function exportExcel() {
  const exportData = users.map((u) => {
    const row = {};

    row.Username = u.username || "";
    row.UID = u.uid || "";
    row.Score = u.score || 0;
    row.Locked = u.locked ? "Sí" : "No";

    Object.keys(u).forEach((key) => {
      if (
        key !== "id" &&
        key !== "username" &&
        key !== "uid" &&
        key !== "score" &&
        key !== "locked"
      ) {
        row[key] = u[key];
      }
    });

    return row;
  });

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "PickEms"
  );

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });

  const file = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(file, "pickems.xlsx");
}

  const filtered = users.filter((u) =>
    (u.username || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-black">
            Usuarios
          </h1>

          <p className="text-zinc-400">
            {users.length} Pick'Em registrados
          </p>
        </div>

        <button
          onClick={loadUsers}
          className="bg-pink-500 px-5 py-3 rounded-xl font-bold"
        >
          Actualizar
        </button>

         <button
    onClick={exportExcel}
    className="bg-emerald-500 px-5 py-3 rounded-xl font-bold"
  >
    📄 Exportar Excel
  </button>

        

      </div>

      <input
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-xl bg-white/5 border border-white/10 mb-8"
      />

      <div className="rounded-2xl overflow-hidden border border-white/10">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="text-left p-4">
                Usuario
              </th>

              <th className="text-left p-4">
                UID
              </th>

              <th className="text-left p-4">
                Score
              </th>

              <th className="text-left p-4">
                Locked
              </th>

            <th className="p-4 text-left">
  Acciones
</th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((user) => (

              <tr
                key={user.id}
                className="border-t border-white/10 hover:bg-white/5"
              >

                <td className="p-4">
                  {user.username}
                </td>

                <td className="p-4 text-sm text-zinc-400">
                  {user.uid}
                </td>

                <td className="p-4 font-bold">
                  {user.score || 0}
                </td>

                <td className="p-4">
                  {user.locked ? "🔒" : "🟢"}
                </td>

                <td className="p-4">

  <Link
    href={`/admin/users/${user.id}`}
    className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition"
  >
    Ver
  </Link>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}