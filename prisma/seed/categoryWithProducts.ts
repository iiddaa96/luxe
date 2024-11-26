import db from "../db";

// Skapar kategorier med produkter
export async function seedCategories() {
  for (const categoryData of categoriesData) {
    await db.category.upsert({
      where: { name: categoryData.name },
      update: {},
      create: {
        name: categoryData.name,
        products: {
          create: categoryData.products,
        },
      },
    });
  }
}

// Typ:ar categoriesData
type CategoriesData = {
  name: string;
  products?: {
    title: string;
    content: string;
    image: string;
    alt: string;
    price: number;
    isArchived?: boolean;
  }[];
};

// Data för kategorier
const categoriesData: CategoriesData[] = [
  {
    name: "Lipstick",
    products: [
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/3614274132625-5.jpg?ref=2980630&hasAlpha=false&w=960&preset=background",
        alt: "Yves Saint Lipstick",
        title: "Yves Saint Laurent - Shine Lipstick",
        price: 329,
        content:
          "YSL LOVESHINE is a high-gloss lipstick that gives lips a wet look. The moisturizing and nourishing formula leaves your lips feeling cared for and protected. Easy to apply, it glides smoothly on the lips. Apply multiple layers for more gloss and color. Experience our unique transforming and melting formula – from lipstick to high-gloss lip oil. Treat yourself to delicious colors that are easy to build, from delicate semi-transparent to eye-catching, high-gloss lips! Discover the upgraded formula of the iconic Rouge Volupté Shine in a new silver packaging. The nourishing formula keeps your lips feeling hydrated, cared for, and protected.",
        isArchived: false,
      },
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/0000030153219-1.jpg?ref=1124611&hasAlpha=false&w=960&preset=background",
        alt: "Superstar Vinyl Ink Lipstick",
        title: "Superstar Vinyl Ink Lipstick",
        price: 149,
        content:
          "Superstar Vinyl Ink Lipstick is a liquid lipstick with a vinyl finish. The formula is long-lasting and has a high color payoff. The lipstick is easy to apply and has a comfortable texture. The lipstick is available in several shades, from nude to bold colors. The lipstick is vegan and cruelty-free. Superstar Vinyl Ink Lipstick is a liquid lipstick with a vinyl finish. The formula is long-lasting and has a high color payoff. The lipstick is easy to apply and has a comfortable texture. The lipstick is available in several shades, from nude to bold colors. The lipstick is vegan and cruelty-free.",
        isArchived: false,
      },
    ],
  },
  {
    name: "Eyeshadow",
    products: [
      {
        image:
          "https://homeofess.com/pub_images/original/charlieston12.jpg?extend=copy&width=800&method=crop&height=800&type=webp",
        alt: "Morphe - Neutral Artistry Palette",
        title: "Morphe - Neutral Artistry Palette",
        price: 199,
        content:
          "Switch up to these neutral shades that are easy to apply and use. These stunning shades can be mixed and matched, so you'll always create a beautiful look. SHADES (row 1): Bare Play, Make a Deal, Straight Up (row 2): Midi, Pact, Promise (row 3): Halfway, Open Mind, Win-Win.",
        isArchived: false,
      },
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/7310641666712-1.jpg?ref=973681&hasAlpha=false&w=960&preset=background",
        alt: "BeautyAct - To Go Eyeshadow Palette",
        title: "BeautyAct - To Go Eyeshadow Palette",
        price: 399,
        content:
          "Contains nine richly pigmented eyeshadows in matte, shimmering, and sparkling shades. The eyeshadows can be used separately or blended to create your own custom look. The formula, which is extremely easy to blend, is effortless to work with and lasts from morning to evening. 100% Vegan and made in Italy. BeautyAct delivers skincare-infused and multifunctional makeup designed for an active lifestyle. The Bare To Go Eyeshadow Palette contains nine richly pigmented eyeshadows in matte, shimmering, and sparkling shades.",
        isArchived: false,
      },
    ],
  },
  {
    name: "Foundation",
    products: [
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/6412600833454.jpg?ref=1126887&hasAlpha=false&w=960&preset=background",
        alt: "Lumene - Natural Glow Foundation",
        title: "Lumene - Natural Glow Foundation",
        price: 344,
        content:
          "Lumene Natural Glow Foundation is a lightweight foundation that provides a natural glow. The foundation has a medium coverage and is easy to build. The formula is enriched with Nordic lingonberry and hyaluronic acid, which moisturizes and nourishes the skin. The foundation is available in several shades and is suitable for all skin types. Lumene Natural Glow Foundation is a lightweight foundation that provides a natural glow. The foundation has a medium coverage and is easy to build. The formula is enriched with Nordic lingonberry and hyaluronic acid, which moisturizes and nourishes the skin. The foundation is available in several shades and is suitable for all skin types.",
        isArchived: false,
      },
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/020714873738.jpg?ref=932803&hasAlpha=false&w=960&preset=background",
        alt: "Clinique - Even Better Foundation",
        title: "Clinique - Even Better Foundation",
        price: 445,
        content:
          "Clinique Even Better Foundation is a liquid foundation that provides a natural finish. The foundation has a medium coverage and is easy to build. The formula is enriched with vitamin C and hyaluronic acid, which moisturizes and nourishes the skin. The foundation is available in several shades and is suitable for all skin types. Clinique Even Better Foundation is a liquid foundation that provides a natural finish. The foundation has a medium coverage and is easy to build. The formula is enriched with vitamin C and hyaluronic acid, which moisturizes and nourishes the skin. The foundation is available in several shades and is suitable for all skin types.",
        isArchived: false,
      },
    ],
  },
  {
    name: "Eyeliner",
    products: [
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/3600531676728.jpg?ref=2664386&hasAlpha=false&w=960&preset=background",
        alt: "Maybelline - Tattoo Liner Ink Pen",
        title: "Maybelline - Tattoo Liner Ink Pen",
        price: 149,
        content:
          "Maybelline Tattoo Liner Ink Pen is a liquid eyeliner with a felt tip. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors. Maybelline Tattoo Liner Ink Pen is a liquid eyeliner with a felt tip. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors.",
        isArchived: false,
      },
      {
        image:
          "https://www.kicks.se/globalassets/integrationimages/0020714996963.png?ref=2738583&w=960&preset=background",
        alt: "Clinique - Quickliner For Eyes",
        title: "Clinique - Quickliner For Eyes",
        price: 280,
        content:
          "Clinique Quickliner For Eyes is an automatic eyeliner pencil. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors. Clinique Quickliner For Eyes is an automatic eyeliner pencil. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors.",
        isArchived: false,
      },
    ],
  },
];
