/// <reference types="astro/client" />

export interface Flavor {
    beanId: number;
    groupName: string[];
    ingredients: string[];
    flavorName: string;
    description: string;
    colorGroup: string;
    backgroundColor: string;
    imageUrl: string;
    glutenFree: boolean;
    sugarFree: boolean;
    seasonal: boolean;
    kosher: boolean;
}