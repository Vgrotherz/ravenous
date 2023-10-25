const apiUrl = 'https://api.yelp.com/v3/businesses/search';
const apiKey = ''; // insert apikey here


const getBusinessListings = async(searchTerm, location, sortingOption) => {
    // Create the URL for the API request
    const url = `${apiUrl}?term=${encodeURIComponent(searchTerm)}&location=${encodeURIComponent(location)}&sort_by=${encodeURIComponent(sortingOption)}`;

    
    // Send the GET request to the Yelp API
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  
    // Process the response
    if (response.ok){
      const data = await response.json();
      // Extract the relevant information about each business
      const businesses = data.businesses.map(business => {
        return {
          imageSrc: business.image_url,
          name: business.name,
          rating: business.rating,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          // gets a phone number from a yelp
          // phone: business.phone,
          reviewCount: business.review_count,
          url: business.url
        };
      });
  
      // Return the array of business objects
      return businesses;
    } else {
      throw new Error('Failed to retrieve business listings');
    }
  }
  
  export default getBusinessListings;

