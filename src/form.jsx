const data = {
    "usage": { "maximum": 500000, "minimum": 0, "id": "v11", "type": "`integer`", "title": "کارکرد" },
    "description": {
        "type": "string",
        "maxLength": 1000,
        "id": "desc",
        "minLength": 10,
        "errors": { "minLength": "طول متن باید بیشتر از  ${schema} حرف باشد.", "maxLength": "طول متن بیشتر از  ${schema} حرف است." },
        "title": "توضیحات آگهی"
    },
}

function Form() {
    return (
        <form>
            {Object.keys(data).map((key) => {
                const field = data[key];
                return (
                    <div key={field.id}>
                        <label htmlFor={field.id}>{field.title}</label>
                        {field.type === 'integer' ? (
                            <input
                                type="number"
                                id={field.id}

                            />
                        ) : (
                            <textarea
                                id={field.id}
                            />
                        )}
                    </div>
                );
            })}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;