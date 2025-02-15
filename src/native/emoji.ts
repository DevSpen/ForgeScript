import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$emoji",
    version: "1.0.0",
    description: "Formats given emoji",
    brackets: false,
    unwrap: true,
    args: [
        {
            name: "emoji ID",
            description: "The emoji id to format",
            rest: false,
            type: ArgType.GuildEmoji,
            required: true
        }
    ],
    execute(ctx, [ emoji ]) {
        emoji ?? ctx.emoji
        return Return.success(
            emoji?.toString()
        )
    },
})