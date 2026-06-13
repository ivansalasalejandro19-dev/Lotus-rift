import { db } from "@/app/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getTeamsData() {
  const snap = await getDoc(
    doc(db, "config", "teams")
  );

  if (!snap.exists()) {
    return null;
  }

  return snap.data();
}