import { ArgType, NativeFunction, Return } from "../structures"

export default new NativeFunction({
    name: "$sum",
    version: "1.0.0",
    description: "Adds multiple numbers",
    brackets: true,
    unwrap: true,
    args: [
        {
            name: "numbers",
            description: "Numbers to add",
            rest: true,
            type: ArgType.Number,
            required: true
        }
    ],
    execute(ctx, [ numbers ]) {
        return Return.success(numbers.reduce((x, y) => x + y))
    },
})