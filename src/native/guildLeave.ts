import noop from "../functions/noop"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$guildLeave",
    version: "1.0.0",
    description: "Leaves a guild",
    brackets: false,
    args: [
        {
            name: "guild ID",
            description: "The guild to leave",
            rest: false,
            required: true,
            type: ArgType.Guild
        }
    ],
    unwrap: true,
    async execute(ctx, [ g ]) {
        g ??= ctx.guild!
        return Return.success(
            !!(await g?.leave().catch(noop))
        )
    },
})