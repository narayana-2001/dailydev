// Define the shape of our data using a TypeScript interface
export interface CardData {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  fromDate: string;
  toDate: string;
  description: string;
}

// Our hardcoded "JSON" data
export const gridData: CardData[] = [
  {
    id: 1,
    name: "Mountain Trip",
    slug: "mountain-trip",
    imageUrl: "https://picsum.photos/seed/1/400/300",
    fromDate: "Jan 10, 2023",
    toDate: "Jan 15, 2023",
    description: "A wonderful hike through the snowy mountains."
  },
  {
    id: 2,
    name: "Beach Vacation",
    slug: "beach-vacation",
    imageUrl: "https://picsum.photos/seed/2/400/300",
    fromDate: "Feb 05, 2023",
    toDate: "Feb 12, 2023",
    description: "Relaxing by the ocean and enjoying the sunshine."
  },
  {
    id: 3,
    name: "City Tour",
    slug: "city-tour",
    imageUrl: "https://picsum.photos/seed/3/400/300",
    fromDate: "Mar 01, 2023",
    toDate: "Mar 04, 2023",
    description: "Exploring the historic downtown area."
  },
  {
    id: 4,
    name: "Desert Safari",
    slug: "desert-safari",
    imageUrl: "https://picsum.photos/seed/4/400/300",
    fromDate: "Apr 12, 2023",
    toDate: "Apr 14, 2023",
    description: "Riding dunes and camping under the stars."
  },
  {
    id: 5,
    name: "Jungle Trek",
    slug: "jungle-trek",
    imageUrl: "https://picsum.photos/seed/5/400/300",
    fromDate: "May 20, 2023",
    toDate: "May 25, 2023",
    description: "Wildlife spotting in the deep rainforest."
  },
  {
    id: 6,
    name: "Lake House",
    slug: "lake-house",
    imageUrl: "https://picsum.photos/seed/6/400/300",
    fromDate: "Jun 10, 2023",
    toDate: "Jun 17, 2023",
    description: "Fishing and kayaking by a quiet lake."
  },
  {
    id: 7,
    name: "Road Trip",
    slug: "road-trip",
    imageUrl: "https://picsum.photos/seed/7/400/300",
    fromDate: "Jul 01, 2023",
    toDate: "Jul 15, 2023",
    description: "Driving across the country with friends."
  },
  {
    id: 8,
    name: "Ski Resort",
    slug: "ski-resort",
    imageUrl: "https://picsum.photos/seed/8/400/300",
    fromDate: "Aug 10, 2023",
    toDate: "Aug 14, 2023",
    description: "Hitting the slopes in the middle of winter."
  },
  {
    id: 9,
    name: "Cabin Getaway",
    slug: "cabin-getaway",
    imageUrl: "https://picsum.photos/seed/9/400/300",
    fromDate: "Sep 05, 2023",
    toDate: "Sep 08, 2023",
    description: "A cozy weekend in a wooden cabin."
  }
];