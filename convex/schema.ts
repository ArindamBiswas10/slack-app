import { defineSchema, defineTable} from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";


const Schema = defineSchema({
    ...authTables,
    workspaces: defineTable({
        name: v.string(),
        userId: v.id("users"),
        joinCode: v.string(),
    }),
});

export default Schema;