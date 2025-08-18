
Built by https://www.blackbox.ai

---

# Sahibinden-Lite (Next.js + Tailwind)

**IMPORTANT:** This project is not the source code of sahibinden.com. It is an educational minimalist example of a marketplace application with similar functionalities.

## Project Overview

Sahibinden-Lite is a simple marketplace application built using Next.js and Tailwind CSS. The application allows users to browse, search, and post listings for various items, including electronics, furniture, and more. Users can easily navigate through categories, view featured listings, and access detailed information on each listing.

## Features

- Homepage displaying featured listing cards
- Category pages (Real Estate, Vehicles, Second-Hand & New, Services, Job Listings)
- Search functionality based on title and location
- Detailed listing pages to view item specifics
- A form to post new listings which saves data to a file
- Simple file-based API for handling listings

## Installation

To set up the project locally, follow these steps:

1. Clone the repository or download the project files.
2. Open a terminal and navigate to the project directory.
3. Run the following commands:

   ```bash
   npm install
   npm run dev
   ```

4. Once the installation is complete, open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can:

- Browse featured listings on the homepage.
- Navigate through different categories to find specific items.
- Use the search bar to find listings by entering keywords.
- Click on a listing to view its details and get in touch with the seller.
- Post a new listing by filling out the form available on the 'Sell' page.

## Dependencies

The project has the following dependencies as defined in the `package.json` file:

- **Next.js**: 14.2.5
- **React**: 18.3.1
- **React DOM**: 18.3.1

Development dependencies include:

- **Tailwind CSS**: 3.4.10
- **Autoprefixer**: 10.4.20
- **PostCSS**: 8.4.41
- **TypeScript**: 5.5.4

## Project Structure

Here’s a brief overview of the project's directory structure:

```
sahibinden-lite/
├── data/
│   └── listings.json        # Sample data for listings
├── src/
│   ├── app/                 # Next.js application pages
│   │   ├── api/             # API routes for listings
│   │   ├── category/        # Category pages for filtering listings
│   │   ├── listing/         # Individual listing details pages
│   │   ├── sell/            # Page to create new listings
│   │   ├── search/          # Page for search results
│   │   └── page.tsx         # Homepage
│   ├── components/          # Reusable components (Header, ListingCard)
│   ├── lib/                 # Library functions for data handling
│   ├── styles/              # Global styles
│   └── globals.css          # Tailwind CSS entry point
├── next.config.mjs          # Configuration for Next.js
├── package.json             # Project metadata and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

This structure allows for modular development and organization within a Next.js application. 

Feel free to explore the code, modify it to suit your needs, and understand how a simple marketplace application can be built using modern web technologies!