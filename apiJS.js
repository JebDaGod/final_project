async function fetchHelpHubData() {
  try {
    const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_83442f10529fc02f579043a8af225bda03e57&q=volunteer');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    document.getElementById('helpHubData').innerHTML = `<p>Unable to load latest news. Please try again later.</p>`;
    console.error('Fetch error:', error);
  }
}

function displayData(data) {
  const container = document.getElementById('helpHubData');
  container.innerHTML = '';
  data.results.forEach(article => {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description ? article.description : 'No description available.'}</p>
      <a href="${article.link}" target="_blank">Read more</a>
    `;
    container.appendChild(item);
  });
}

window.onload = fetchHelpHubData;
