import moment from 'moment'

// Remove [] or [some text] beginning tags from strings / html
export const removeBeginningSquareBracketsTag = (text) => {
  if (text == null || !text.startsWith("[")) {
    return text;
  }

  if (text.indexOf(']') < 0) {
    // No closing bracket.
    return text;
  }

  return text.substring(text.indexOf(']') + 1).trim();
};


// Remove [] or [some text] tags from strings / html
export const removeSquareBracketsTag = (text) => {
  return text.replace(/ *\[[^\]]*]/g, '');
};


// Truncate long text to desired number of chars and end it with desired ellipsis
export const truncate = (text, length, suffix) => {
  return text.substring(0, length) + suffix;
};


// Parse events from discourse API

// Event object's excerpt contains time, location and content separated by '\n' (new line endings)

// Example of excerpt:

// "2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z \n <a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>\nLocation: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels \nThis is the first example of and event. You can assume that the first row line is a en event in markdown format, followed by the location and description. \nLorem ipsum. Nympharum molire petendum susurro exire, est magis: prohibebant timor <a href=\"http://aitnubibus.com/et\" rel=\"nofollow noopener\">iam viderat sed</a> aquas Avernales flectitur manet; colla. Et ex tecum nec inquit freta; molimina omnis ramis."

// Initially, excerpt is splitted by '\n'

// First part is time '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'

// Second part is location redundant part '<a class=\"lightbox\" href=\"https://edgeryders.eu/uploads/default/original/2X/a/af9c7796e393f056493b43f97b94a4d37c9b995a.jpeg\" data-download-href=\"https://edgeryders.eu/uploads/default/af9c7796e393f056493b43f97b94a4d37c9b995a\" title=\"Wine-Event-Placeholder.jpg\">[Wine-Event-Placeholder]</a>'

// Third part is location useful part 'Location: <a href=\"https://www.deliriumvillage.com/bar/delirium-cafe/\" rel=\"nofollow noopener\">Delirium Café</a>, Impasse de la Fidélité 4, Brussels'

// The rest are content parts (...rest), thus they're joined into one string bellow

export const parseEvents = (events, parseContentKey) => {
  let final = [];

  events.forEach(function (e) {
    const parts = e[parseContentKey].split("\n");
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

  return final.length === 1 ? final[0] : final;
};


// As mentioned above, time part is in format '2019-05-22T08:00:00Z → 2019-05-22T16:00:00Z'
// Moment will be used to format dates
export const parseTimePart = (timeString) => {
  const parts = timeString.split(" ");
  let [first, arrow, second] = parts;

  first = moment(first).format('lll');
  second = moment(second).format('lll');

  return first + ' ' + arrow + ' ' + second;
};


// Wrap desired text in HTML with <strong> element
export const boldDesiredWordInHtml = (text, desiredWord) => {
  return text.replace(desiredWord, '<strong>Location:</strong>');
};


// Get latest element from array by date
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
export const formatDate = (date, formatString) => {
  return moment(date).format(formatString);
};


// Attach corresponding latest post to featured work
export const attachLatestFeatureWorkPost = (works, posts) => {
  works.forEach(function (w) {
    let post = posts.find(el => el.topic_id === w.id);
    w.latestPost = posts.find(el => el.topic_id === w.id);
  });

  return works;
};

