
const fetchShortenedURL = async () => {
    const response = await fetch("/links");
    const links = await response.json();
    console.log("links", links);

    const list = document.getElementById("shortened_urls");
    list.innerHTML = "";

    for (const [shortCode, url] of Object.entries(links)) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${window.location.origin}/${shortCode}" target="_blank">${window.location.origin}/${shortCode}</a> - ${url}`;
        list.appendChild(li);
    }
};


document.getElementById('shorten-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const url = formData.get('url');
  const shortcode = formData.get('shortCode');

  console.log(url, shortcode);

  try {
    const response = await fetch("/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shortCode: shortcode })
    });

    if (response.ok) {
      alert("form submitted successfully");
      event.target.reset();
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
});
