import { ChannelProperties, ChannelProperty } from "../properties/channel"
import { EmojiProperties, EmojiProperty } from "../properties/emoji"
import { GuildProperties, GuildProperty } from "../properties/guild"
import { MemberProperties, MemberProperty } from "../properties/member"
import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$oldChannel",
    version: "1.0.0",
    description: "Retrieves old data from an event whose context was a channel instance",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "property",
            description: "The property to pull",
            rest: false,
            type: ArgType.Enum,
            enum: ChannelProperty,
            required: true
        },
        {
            name: "separator",
            description: "The separator to use in case of array",
            rest: false,
            type: ArgType.String
        }
    ],
    execute(ctx, [ prop, sep ]) {
        return Return.success(
            ChannelProperties[prop](ctx.states?.channel?.old, sep)
        )
    },
})