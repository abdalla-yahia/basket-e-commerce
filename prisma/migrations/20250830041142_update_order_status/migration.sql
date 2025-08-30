-- CreateEnum
CREATE TYPE "public"."OrderStatus" AS ENUM ('PENDING', 'PREPARING', 'SHIPPED', 'DELIVERED', 'CANCELED', 'RETURNED');

-- AlterTable
ALTER TABLE "public"."Orders" ADD COLUMN     "status" "public"."OrderStatus";
