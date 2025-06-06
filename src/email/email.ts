// i use "__brand" to assign a new vaulue to my Mail type, it still be a string but i cqan make checks on it

export type Email = string & { __brand: "Mail" };
