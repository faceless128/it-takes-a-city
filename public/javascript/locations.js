function stateNameToAbbreviation(name) {
	let states = {
		"arizona": "AZ",
		"alabama": "AL",
		"alaska": "AK",
		"arkansas": "AR",
		"california": "CA",
		"colorado": "CO",
		"connecticut": "CT",
		"district of columbia": "DC",
		"delaware": "DE",
		"florida": "FL",
		"georgia": "GA",
		"hawaii": "HI",
		"idaho": "ID",
		"illinois": "IL",
		"indiana": "IN",
		"iowa": "IA",
		"kansas": "KS",
		"kentucky": "KY",
		"louisiana": "LA",
		"maine": "ME",
		"maryland": "MD",
		"massachusetts": "MA",
		"michigan": "MI",
		"minnesota": "MN",
		"mississippi": "MS",
		"missouri": "MO",
		"montana": "MT",
		"nebraska": "NE",
		"nevada": "NV",
		"new hampshire": "NH",
		"new jersey": "NJ",
		"new mexico": "NM",
		"new york": "NY",
		"north carolina": "NC",
		"north dakota": "ND",
		"ohio": "OH",
		"oklahoma": "OK",
		"oregon": "OR",
		"pennsylvania": "PA",
		"rhode island": "RI",
		"south carolina": "SC",
		"south dakota": "SD",
		"tennessee": "TN",
		"texas": "TX",
		"utah": "UT",
		"vermont": "VT",
		"virginia": "VA",
		"washington": "WA",
		"west virginia": "WV",
		"wisconsin": "WI",
		"wyoming": "WY",
		"american samoa": "AS",
		"guam": "GU",
		"northern mariana islands": "MP",
		"puerto rico": "PR",
		"us virgin islands": "VI",
		"us minor outlying islands": "UM"
	}

	let a = name.trim().replace(/[^\w ]/g, "").toLowerCase(); //Trim, remove all non-word characters with the exception of spaces, and convert to lowercase
	if(states[a] !== null) {
		return states[a];
	}

	return null;
}

// Functions used in the main page
function getPosts() {
	var postContainer = document.querySelector(".locations");
	console.log(postContainer)
	fetch(`/api/locations`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			for (var i = 0; i < data.length; i++) {
				var dateParts = data[i].updatedAt.split("-");
				var jsDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2].substr(0, 2));
				var month = jsDate.getUTCMonth() + 1;
				var day = dateParts[2].substr(0, 2);
				var year = jsDate.getFullYear();

				var newDate = year + "/" + month + "/" + day;
				//Using console.log to examine the data
				var updateDate = document.createElement("p")
				var locationName = document.createElement("h2");
				var streetAddress = document.createElement("p");
				var cityStateZip = document.createElement("h1");
				var userNameComment = document.createElement("p");
				var comments = document.createElement("p");
				var commentInput = document.createElement("input");
				var commentButton = document.createElement("button");
				comments.classList.add('comments', "ml-10", "text-base");
				userNameComment.classList.add('userNameComments', 'ml-10', "text-lg",);
				streetAddress.classList.add("font-semibold", "text-base", "text-lg", "bold")
				locationName.classList.add("underline", "font-bold", "text-xl", "text-base", "py-2")
				updateDate.classList.add('text-neutral-500', 'text-md')

				//Setting the text of the h3 element and p element.
				cityStateZip.textContent = `${data[i].resource_city}, ${stateNameToAbbreviation(data[i].state)} ${data[i].zip_code}`;
				locationName.textContent = data[i].location_name;
				streetAddress.textContent = data[i].address;
				updateDate.textContent = `Accurate as of ${newDate}`;


				//Appending the dynamically generated html
				//Append will attach the element as the bottom most child.
				postContainer.append(locationName);
				postContainer.append(streetAddress);
				postContainer.append(cityStateZip);
				postContainer.append(updateDate);
			}
		});
}
getPosts();

