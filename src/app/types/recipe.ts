/**
 * Shared Recipe Interface
 * Used for Search Results and Detail Pages (FR008, FR009)
 */
export interface Recipe {
  id: string;
  title: string;
  description: string;
  image_url: string;
  prep_time: number; // in minutes
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  ingredients: string[];
  instructions: string[];
}

/**
 * Cookbook Entry
 * Extends Recipe to include user-specific notes (FR010)
 */
export interface CookbookEntry extends Recipe {
  personal_notes?: string;
  date_added: string;
}