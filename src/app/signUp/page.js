"use client";
import React, { useState } from "react";
import { auth, app } from "../../../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { Nova_Flat } from "next/font/google";

const db = getFirestore(app);

function signUp() {
    const [email, setEmail] = useState("");
    const [oassword, setPassword] = usesState("");
    const [year, setYear] = usesState("");
    const [weight, setWeight] = usesState("");
    const [name, setName] = usesState("");
    const [error, setError] = usesState("");
    const [zip, setZip] = useState("");

}