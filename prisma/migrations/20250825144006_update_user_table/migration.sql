-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "passwordExpire" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "passwordVirify" BOOLEAN DEFAULT false,
ADD COLUMN     "passwordresetCode" TEXT;
