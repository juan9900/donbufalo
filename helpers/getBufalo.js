import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const getBufalo = async (id) => {
  try {
    const docRef = doc(db, "bufalos", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return { ok: true, data: docSnap.data() };
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return { ok: false, error: "No such document!" };
    }
  } catch (e) {
    console.log(e);
    return { ok: false, error: e };
  }
};
