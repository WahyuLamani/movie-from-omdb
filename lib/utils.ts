const formAction = (e: any, schema: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = schema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return { success: false, data: result.error.format() };
    }
    const data: any = Object.fromEntries(formData);
    return { success: true, data: data };
};

export { formAction };
