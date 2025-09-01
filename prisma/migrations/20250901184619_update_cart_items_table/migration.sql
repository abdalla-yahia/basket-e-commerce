/*
  Warnings:

  - You are about to drop the `_ProductToWishlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_ProductToWishlist" DROP CONSTRAINT "_ProductToWishlist_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ProductToWishlist" DROP CONSTRAINT "_ProductToWishlist_B_fkey";

-- DropTable
DROP TABLE "public"."_ProductToWishlist";

-- CreateTable
CREATE TABLE "public"."_WishlistProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_WishlistProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_WishlistProducts_B_index" ON "public"."_WishlistProducts"("B");

-- AddForeignKey
ALTER TABLE "public"."_WishlistProducts" ADD CONSTRAINT "_WishlistProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_WishlistProducts" ADD CONSTRAINT "_WishlistProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Wishlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;
