import db from "../db";

export async function product() {
  await db.product.upsert({
    where: { id: 3 },
    update: {},
    create: {
      image:
        "https://www.kicks.se/globalassets/integrationimages/3600531676728.jpg?ref=2664386&hasAlpha=false&w=960&preset=background",
      alt: "Maybelline - Tattoo Liner Ink Pen",
      title: "Maybelline - Tattoo Liner Ink Pen",
      price: 149,
      content:
        "Maybelline Tattoo Liner Ink Pen is a liquid eyeliner with a felt tip. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors. Maybelline Tattoo Liner Ink Pen is a liquid eyeliner with a felt tip. The eyeliner has a long-lasting formula that is smudge-proof and waterproof. The eyeliner is easy to apply and has a high color payoff. The eyeliner is available in several shades, from black to bold colors.",
    },
  });
}
