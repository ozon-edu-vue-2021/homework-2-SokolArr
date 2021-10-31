export default {
    name: "root",
    contents: [
        {name: "hello"},
        {name: "wat"},
        {
            name: "child folder",
            contents: [
                {
                    name: "child folder",
                    contents: [{name: "hello"}, {name: "wat"}]
                },
                {name: "hello"},
                {name: "wat"},
                {
                    name: "child folder",
                    contents: [{name: "hello"}, {name: "wat"}]
                }
            ]
        }
    ],
}