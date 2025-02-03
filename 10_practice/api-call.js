const accessToken = 'IGAAGg1aXZC10lBZAE5RakVIbXlZAR0JmUU05ZAmVOb05oSzZAyU1hvOUIyajRzcXFyQlFtbmhhZAmFPbTVoVG5DenZArdVFmYmNyMGtJYTlGemdmRWpPVXRqNmdEbUgwY1pQeloyeVdLbHc2Y0lralFtZA1AxSF9QR3R4VU5NRVVzR0ZAGSQZDZD';

const fetchInstagramData = async () => {
  try {
    const response = await fetch(`https://graph.instagram.com/me?fields=followers_count&access_token=${accessToken}`);
    const data = await response.json();
    console.log('Followers Count:', data.followers_count);
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
  }
};

fetchInstagramData();
