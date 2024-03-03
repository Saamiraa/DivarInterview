const data = {
    "usage": { "maximum": 500000, "minimum": 0, "id": "v11", "type": "integer", "title": "کارکرد" },
    "description": {
        "type": "string",
        "maxLength": 1000,
        "id": "desc",
        "minLength": 10,
        "errors": { "minLength": "طول متن باید بیشتر از  ${schema} حرف باشد.", "maxLength": "طول متن بیشتر از  ${schema} حرف است." },
        "title": "توضیحات آگهی"
    },
    "min_prepayment": {
        "maximum": 50000000000,
        "minimum": 100000,
        "errors": { "minimum": "مقدار این فیلد باید بیشتر از ${schema} باشد.", "maximum": "مقدار این فیلد باید کمتر از ${schema} باشد." },
        "type": "integer",
        "title": "حداقل مبلغ پیش‌پرداخت"
    },
    "necessary_section": { "type": "string", "title": "اطلاعات الزامی" },
    "location": {
        "required": ["city"],
        "type": "object",
        "properties": {
            "destination_latitude": { "type": "number", "id": "destination_latitude" },
            "destination_longitude": { "type": "number", "id": "destination_longitude" },
            "latitude": { "type": "number", "id": "latitude" },
            "longitude": { "type": "number", "id": "longitude" },
            "neighborhood": { "id": "place4", "type": "integer", "title": "محله" },
            "city": { "id": "place2", "type": "integer", "title": "شهر" },
            "province": { "type": "integer", "id": "province" },
            "coordination_type": { "type": "string" }
        },
        "title": "محدودهٔ آگهی"
    },
    "new_price": {
        "type": "integer",
        "maximum": 50000000000,
        "minimum": 10000000,
        "id": "v09",
        "errors": { "minimum": "مقدار ${data} برای قیمت کمتر از حد مجاز است. لطفاً مقدار ${schema} به بالا وارد کنید." },
        "title": "قیمت پایه"
    },
    "title": { "maxLength": 50, "type": "string", "id": "title", "minLength": 3, "title": "عنوان آگهی" },
    "exchange": { "type": "boolean", "title": "مایلم معاوضه کنم" },
    "year": {
        "enum": [
            "۱۴۰۲",
            "۱۴۰۱",
            "۱۴۰۰",
            "۱۳۹۹",
            "۱۳۹۸",
            "۱۳۹۷",
            "۱۳۹۶",
            "۱۳۹۵",
            "۱۳۹۴",
            "۱۳۹۳",
            "۱۳۹۲",
            "۱۳۹۱",
            "۱۳۹۰",
            "۱۳۸۹",
            "۱۳۸۸",
            "۱۳۸۷",
            "۱۳۸۶",
            "۱۳۸۵",
            "۱۳۸۴",
            "۱۳۸۳",
            "۱۳۸۲",
            "۱۳۸۱",
            "۱۳۸۰",
            "۱۳۷۹",
            "۱۳۷۸",
            "۱۳۷۷",
            "۱۳۷۶",
            "۱۳۷۵",
            "۱۳۷۴",
            "۱۳۷۳",
            "۱۳۷۲",
            "۱۳۷۱",
            "۱۳۷۰",
            "۱۳۶۹",
            "۱۳۶۸",
            "۱۳۶۷",
            "۱۳۶۶",
            "قبل از ۱۳۶۶"
        ],
        "type": "string",
        "enumNames": [
            "۲۰۲۳ - ۱۴۰۲",
            "۲۰۲۲ - ۱۴۰۱",
            "۲۰۲۱ - ۱۴۰۰",
            "۲۰۲۰ - ۱۳۹۹",
            "۲۰۱۹ - ۱۳۹۸",
            "۲۰۱۸ - ۱۳۹۷",
            "۲۰۱۷ - ۱۳۹۶",
            "۲۰۱۶ - ۱۳۹۵",
            "۲۰۱۵ - ۱۳۹۴",
            "۲۰۱۴ - ۱۳۹۳",
            "۲۰۱۳ - ۱۳۹۲",
            "۲۰۱۲ - ۱۳۹۱",
            "۲۰۱۱ - ۱۳۹۰",
            "۲۰۱۰ - ۱۳۸۹",
            "۲۰۰۹ - ۱۳۸۸",
            "۲۰۰۸ - ۱۳۸۷",
            "۲۰۰۷ - ۱۳۸۶",
            "۲۰۰۶ - ۱۳۸۵",
            "۲۰۰۵ - ۱۳۸۴",
            "۲۰۰۴ - ۱۳۸۳",
            "۲۰۰۳ - ۱۳۸۲",
            "۲۰۰۲ - ۱۳۸۱",
            "۲۰۰۱ - ۱۳۸۰",
            "۲۰۰۰ - ۱۳۷۹",
            "۱۹۹۹ - ۱۳۷۸",
            "۱۹۹۸ - ۱۳۷۷",
            "۱۹۹۷ - ۱۳۷۶",
            "۱۹۹۶ - ۱۳۷۵",
            "۱۹۹۵ - ۱۳۷۴",
            "۱۹۹۴ - ۱۳۷۳",
            "۱۹۹۳ - ۱۳۷۲",
            "۱۹۹۲ - ۱۳۷۱",
            "۱۹۹۱ - ۱۳۷۰",
            "۱۹۹۰ - ۱۳۶۹",
            "۱۹۸۹ - ۱۳۶۸",
            "۱۹۸۸ - ۱۳۶۷",
            "۱۹۸۷ - ۱۳۶۶",
            "قبل از ۱۹۸۷ - قبل از ۱۳۶۶"
        ],
        "id": "v10",
        "title": "مدل (سال تولید)"
    },
    "category": { "type": "string", "title": "دسته‌بندی" },
    "contact": {
        "required": ["phone"],
        "type": "object",
        "properties": {
            "phone": { "type": "string", "id": "phone", "title": "", "default": "09940000000" },
            "user_verification_info": {
                "type": "string",
                "id": "user_verification_info",
                "title": "",
                "default": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjA5OTQwMDAwMDAwIiwidXNlcl9uZWVkX3ZlcmlmaWNhdGlvbiI6dHJ1ZX0.sx1c4qH8iSkFbCpgllJZPIS9Su5CZpJeLQXA8HiPtm4"
            },
        }
    }
}

function Form() {

    return (
        <form>
            {Object.keys(data).map((key) => {
                const field = data[key]
                if (field.type === 'string') {
                    if (field.enum) {
                        return (
                            <div key={key}>
                                <label>{field.title}</label>
                                <select id={key}>
                                    {field.enum.map((option, index) => (
                                        <option value={option} key={index}>
                                            {field.enumNames ? field.enumNames[index] : option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )
                    }
                    return (
                        <div key={key}>
                            <label>{field.title}</label>
                            <input id={key} type="text" />
                        </div>
                    )
                }
                if (field.type === 'integer') {
                    return (
                        <div key={key}>
                            <label>{field.title}</label>
                            <input id={key} type="number" />
                        </div>
                    )
                }
                if (field.type === 'boolean') {
                    return (
                        <div key={key}>
                            <label>{field.title}</label>
                            <input id={key} type="checkbox" />
                        </div>
                    )
                }
                if (field.type === 'boolean') {
                    return (
                        <div key={key}>
                            <label>{field.title}</label>
                            <input id={key} type="checkbox" />
                        </div>
                    )
                }
            })}
        </form>
    )
}

export default Form