import { ImageExtension, ImageSize } from "discord.js"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildNames",
    version: "1.0.0",
    description: "Returns the server names of the bot",
    brackets: false,
    args: [
        {
            name: "separator",
            description: "The separator to use for each guild",
            rest: false,
            required: true,
            type: ArgType.String
        }
    ],
    unwrap: true,
    execute(ctx, [ sep ]) {
        return Return.success(
            ctx.client.guilds.cache.map(x => x.name).join(sep || ", ")
        )
    },
})