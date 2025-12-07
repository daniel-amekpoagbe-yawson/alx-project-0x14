# MoviesDatabase API Documentation

## API Overview
Provides complete and updated data for over **9 million** titles (movies, series, and episodes).  
Recent titles are updated weekly, while ratings and light episode data are updated daily.

All endpoints return an object containing a **results** key.  
Endpoints that include pages also return **page**, **next**, and **entries**.

## API Version
v1 (based on provided documentation)

## Available Endpoints

### Titles – Multiple
**GET /titles**  
Returns an array of titles based on filters and sorting options.  
Query parameters: multiple, including the unique `list` parameter.  
Model: **title**

### Titles by List of IDs
**GET /x/titles-by-ids**  
Returns an array of titles matching the provided ID list.  
Query parameters: `info`, `list`, `idsList` (array of strings).  
Model: **title**

### Title by ID
**GET /titles/{id}**  
Returns a title using the IMDb ID.  
Query parameters: `info`  
Model: **title**

### Title Rating
**GET /titles/{id}/ratings**  
Returns rating and vote count.  
Model: **rating**

### Series Episodes
**GET /titles/series/{id}**  
Returns light episode data (episode ID, season, episode number).  
Model: **light episode**

### Season Count
**GET /titles/seasons/{id}**  
Returns total number of seasons (integer).

### Episode IDs by Season
**GET /titles/series/{id}/{season}**  
Returns light episode data for the selected season.  
Model: **light episode**

### Episode Details
**GET /titles/episode/{id}**  
Returns a full episode title model.  
Query parameters: `info`  
Model: **title**

### Upcoming Titles
**GET /titles/x/upcoming**  
Returns upcoming titles based on filters.  
Model: **title**

### Search Titles by Keyword
**GET /titles/search/keyword/{keyword}**  
Model: **title**

### Search Titles by Title
**GET /titles/search/title/{title}**  
Query parameters: multiple + `exact`  
Model: **title**

### Search Titles by Aka
**GET /titles/search/akas/{aka}**  
Case-sensitive exact matches only.  
Model: **title**

### Actors
**GET /actors**  
Query parameters: `limit`, `page`  
Model: **actor**

### Actor by ID
**GET /actors/{id}**  
Model: **actor**

### Utils
**GET /title/utils/titleType** – list of title types  
**GET /title/utils/genres** – list of genres  
**GET /title/utils/lists** – list options for `list` query parameter

## Request and Response Format

### Request Format
Typical request includes optional query parameters such as:
- `info`
- `limit`
- `page`
- `titleType`
- `startYear`, `endYear`, `year`
- `genre`
- `sort`
- `exact`
- `list`

### Response Format
Every response includes:
```js
{
  "results": [...],
  "page": 1,
  "next": true,
  "entries": 10
}
```

Example model objects:

**Rating Model:**
```js
{
  "tconst": "tt0000003",
  "averageRating": 6.5,
  "numVotes": 1631
}
```

**Light Episode Model:**
```js
{
  "tconst": "tt0020666",
  "parentTconst": "tt15180956",
  "seasonNumber": 1,
  "episodeNumber": 2
}
```

**Actor Model:**
```js
{
  "nconst": "nm0000001",
  "primaryName": "Fred Astaire",
  "birthYear": 1899,
  "deathYear": 1987,
  "primaryProfession": "soundtrack,actor,miscellaneous",
  "knownForTitles": "tt0050419,tt0053137,tt0072308,tt0031983"
}
```

## Authentication
The documentation does not specify authentication details beyond supporting developers via a public link.  
(Use appropriate headers or tokens if required by the API provider.)

## Error Handling
Common API errors typically include:
- Missing or invalid IMDb ID in path parameters
- Invalid query parameter types
- Out-of-range values (e.g., limit > 50)
Handle errors by validating inputs before sending the request.

## Usage Limits and Best Practices
- Maximum `limit` per page: **50**
- Use predefined lists when filtering large collections
- Use `info` for optimized payload sizes (e.g., mini_info, base_info)
- Frequent updates: titles weekly, ratings daily
- Cache responses when possible to reduce repeated calls
