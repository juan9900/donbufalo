import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const getBufalo = async (id) => {
  try {
    const docRef = doc(db, "bufalos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { ok: true, data: docSnap.data() };
    } else {
      // doc.data() will be undefined in this case
      return { ok: false, error: "No such document!" };
    }
  } catch (e) {
    console.log(e);
    return { ok: false, error: e };
  }
};
