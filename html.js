// Aplikasi Bimbel Matematika Interaktif // Untuk jenjang SD, SMP, dan SMA // Menyediakan topik-topik lengkap dan latihan soal interaktif

import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; import { Button } from "@/components/ui/button";

const topics = { SD: ["Penjumlahan", "Pengurangan", "Perkalian", "Pecahan"], SMP: ["SPLDV", "Persamaan Kuadrat", "Statistik", "Bangun Ruang"], SMA: ["Fungsi", "Limit", "Turunan", "Integral"] };

const questions = { Penjumlahan: { soal: "Berapakah 125 + 378?", opsi: ["403", "503", "513", "503"], jawaban: "503" }, SPLDV: { soal: "Jika x + y = 10 dan x - y = 2, berapakah nilai x?", opsi: ["4", "6", "8", "10"], jawaban: "6" }, Fungsi: { soal: "Jika f(x) = 2x + 3, maka f(5) = ?", opsi: ["10", "11", "12", "13"], jawaban: "13" } };

export default function BimbelMatematika() { const [jenjang, setJenjang] = useState("SD"); const [topik, setTopik] = useState(null); const [jawaban, setJawaban] = useState(null); const [hasil, setHasil] = useState(null);

const pilihJawaban = (opsi) => { setJawaban(opsi); if (opsi === questions[topik]?.jawaban) { setHasil("Benar!"); } else { setHasil("Salah, coba lagi."); } };

return ( <div className="p-4 space-y-