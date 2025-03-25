export {};

declare global {
  type PageType = {
    bodySummary: string; // Summary of the page body
    handle: string; // Unique handle for the page
    id: string; // Unique identifier for the page
    data: MetafieldType;
  };
  type MenuItemType = {
    id: string; // Unique identifier for the menu item
    title: string; // Title of the menu item
    url?: string; // URL of the menu item (optional)
    type?: string; // Type of the menu item (optional)
    resourceId?: string | null; // Resource ID (optional)
    tags?: string[]; // Tags associated with the menu item (optional)
    items?: MenuItemType[]; // Nested menu items (optional)
  };

  type MenuType = {
    id: string; // Unique identifier for the menu
    items: MenuItemType[]; // This ensures menu contains an array of items
  };

  type ShopType = {
    description: string; // Description of the shop
    name: string; // Name of the shop
    moneyFormat: string; // Format for displaying money values
    shipsToCountries: string[]; // List of countries to which the shop ships
    primaryDomain: {
      host: string; // Hostname of the primary domain
      url: string; // URL of the primary domain
    };
    brand: {
      shortDescription: string; // Short description of the brand
      slogan: string; // Slogan of the brand
      logo: {
        image: {
          height: number; // Height of the logo image
          src: string; // Source URL of the logo image
          width: number; // Width of the logo image
          altText: string | null; // Alt text for the logo image
        };
      };
    };
  };
}
