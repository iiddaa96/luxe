/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `inventory` on the `Product` table. All the data in the column will be lost.
  - Added the required column `content` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "description",
DROP COLUMN "inventory",
ADD COLUMN     "content" TEXT NOT NULL;
