const btn = document.getElementById("btn");
const q = document.getElementById("q");
const answer = document.getElementById("answer");

btn.addEventListener("click", async () => {
  const topic = q.value;
  if(!topic) return alert("Pehle topic likho!");

  answer.innerHTML = "Socha ja raha hai... ⏳";

  const prompt = `You are AnuVerse Notes AI. Explain in simple Hinglish. No ** stars. Use bullet points. Topic: ${topic}. Structure: 1. Definition 2. 3 key points 3. Yaad karne ki trick 4. Exam me kaise likhna hai.`;

  try {
    // NO API KEY NEEDED
    const res = await fetch(`https://text.pollinations.ai/${encodeURIComponent(prompt)}`);
    const text = await res.text();
    
    // Format saaf karo
    answer.innerHTML = text.replace(/\n/g, "<br>");
    
  } catch (e) {
    answer.innerHTML = "Error: " + e.message;
  }
});