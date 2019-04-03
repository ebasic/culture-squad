import moment from 'moment'

// Remove [] or [some text] tags at the beginning of string / HTML
export const removeBeginningSquareBracketsTag = (text) => {
  if (text == null || !text.startsWith("["))
    return text;

  if (text.indexOf(']') < 0)
    // No closing bracket.
    return text;

  return text.substring(text.indexOf(']') + 1).trim();
};


// Remove [] or [some text] tags at any position in string / HTML
export const removeSquareBracketsTag = (text) => {
  return text.replace(/ *\[[^\]]*]/g, '');
};


// Truncate long text to desired number of chars and end it with desired ellipsis
export const truncate = (text, length, suffix) => {
  return text.substring(0, length) + suffix;
};


// Parse events from discourse API

// parseExcerptKey is varying (on some objects it is literally 'excerpt' and on some 'cooked'

// Event object's excerpt value contains time, location and content separated by '\n' (new line endings)

// Example of excerpt:

// "2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z \n <a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>\nLocation: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels \nThis is the first example of and event. You can assume that the first row line is a en event in markdown format, followed by the location and description. \nLorem ipsum. Nympharum molire petendum susurro exire, est magis: prohibebant timor <a href=\"http://aitnubibus.com/et\" rel=\"nofollow noopener\">iam viderat sed</a> aquas Avernales flectitur manet; colla. Et ex tecum nec inquit freta; molimina omnis ramis."

// STEPS:

// 1) excerpt is splitted by '\n'

// 2) first part is time '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'

// 3) second part is location redundant part, thus it is ignored '<a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>'

// 4) third part is location useful part 'Location: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels'

// 5) the rest are content parts (...rest), thus they're joined into one string bellow

export const parseEvents = (events, parseExcerptKey) => {
  if(!Array.isArray(events))
    return [];

  let final = [];

  events.forEach(function (e) {
    const parts = e[parseExcerptKey].split("\n");
    const [time, location_part_redundant, location_part_main, ...rest] = parts;

    final.push({
      id: e.id,
      title: e.title,
      slug: e.slug,
      time: parseTimePart(time),
      location: boldDesiredWordInHtml(location_part_main, 'Location:'),
      content: rest.join(''),
      image: e.image_url
    });
  });

  return final;
};

// Function that parses & formats timePart from string above
// As mentioned above, time part is in format '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'
// Moment will be used to format dates
export const parseTimePart = (timeString) => {
  const parts = timeString.split(" ");
  let [first, arrow, second] = parts;

  first = moment(first).format('lll');
  second = moment(second).format('lll');

  return first + ' ' + arrow + ' ' + second;
};


// Wrap desired text in HTML with <strong> element (bold)
export const boldDesiredWordInHtml = (text, desiredWord) => {
  return text.replace(desiredWord, `<strong>${desiredWord}</strong>`);
};


// Get latest element from array by date
// dateKey is varying, somewhere 'created_at' is used and somewhere 'updated_at'
export const getLatestByDate = (array, dateKey) => {
  if (array.length) {
    return array.reduce(function (r, a) {
      return r[dateKey] > a[dateKey] ? r : a;
    });
  } else {
    return [];
  }
};


// Apply moment format
// Consult (https://momentjs.com/docs/#/parsing/string-format/) for various formats
export const formatDate = (date, formatString) => {
  return moment(date).format(formatString);
};


// Parse error object
// Prepare response for Nuxt error page
// Nuxt error page requires response in format { statusCode: status, message: message }
export const parseError = (err) => {
  // Return error if it's not a response error.
  if (!err.response) {
    // Catch common non-response errors.
    if (!err.status && err.message === 'Network Error') {
      return { statusCode: 500, message: 'There was a problem with the internet connection.' };
    }

    return { statusCode: err.status, message: err.message };
  }

  // Parse response error
  if (err.response) {
    let status = err.response.data && err.response.data.status ? err.response.data.status : err.status;
    let statusText = err.response.data && err.response.data.statusText ? err.response.data.statusText : err.statusText;
    let message = null;

    if (err.response.data && err.response.data.data){
      switch(typeof err.response.data.data) {
        case 'string':
          message = err.response.data.data;
          break;
        case 'object':
          message = err.response.data.data.errors ? err.response.data.data.errors : statusText;
          break;
        default:
        message = statusText;
      }
    } else {
      message = statusText;
    }

    return { statusCode: status, message: message };
  }
};
