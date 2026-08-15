import { NextResponse } from "next/server";
import { toursList } from "@/lib/toursData";

const SYSTEM_PROMPT = `Siz "Lucky Tours" premium sayohat agentligining aqlli AI Menejerisiz (ismingiz Mohira).
Sizning vazifangiz mijozlarga yo'nalishlar, turlar, biletlar, mehmonxonalar, vizalar va narxlar bo'yicha do'stona, professional va aniq yordam berish.

BIZNING ASOSIY TURLAR VA NARXLAR:
${toursList
  .map(
    (t) =>
      `- ${t.title.uz} (${t.country.uz}, ${t.city.uz}): ${t.price} dan boshlanadi. Davomiyligi: ${t.duration.uz}. Asosiy afzalliklari: ${t.highlights.uz.slice(0, 3).join(", ")}`
  )
  .join("\n")}

BIZNING XIZMATLARIMIZ:
1. Barcha turdagi Viza ko'magi (Shengen, BAA, AQSh, Osiyo va h.k.)
2. Tibbiy va sayohat sug'urtasi
3. Aviabiletlar va mehmonxonalarni band qilish
4. Bo'lib to'lash va moslashuvchan to'lov shartlari
5. 24/7 qo'llab-quvvatlash

ALOQA VA BAND QILISH:
- Telefon: +998 71 200 00 01
- Telegram: @luckytours
- Manzil: Toshkent sh., Markaziy filial

MULOQOT QOIDALARI:
- Har doim samimiy, xushmuomala va o'zbek tilida (yoki mijoz ingliz tilida yozsa ingliz tilida) javob bering.
- Javoblaringiz loqa, tushunarli va 2-4 jumladan oshmasin.
- Mijoz tur so'rasa, narxi va nimalar kiritilganini aytib, arizasini saytda qoldirishni yoki menejerimiz bilan bog'lanishni taklif qiling.
- Emojilardan unumli foydalaning (✈️, 🌴, 🏨, ⭐️, 📞).`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "DeepSeek API key is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API Error:", errorText);
      return NextResponse.json(
        { error: `DeepSeek API call failed: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content || "Kechirasiz, javob olishda xatolik yuz berdi.";

    return NextResponse.json({ result: aiMessage });
  } catch (error: unknown) {
    console.error("Chat API Internal Error:", error);
    return NextResponse.json(
      { error: "Server ichki xatoligi yuz berdi." },
      { status: 500 }
    );
  }
}
