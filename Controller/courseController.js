const CourseSelection = require('../Model/courseModel.js');

exports.submitCourseForm = async (req, res) => {
    console.log("Received form data:", req.body);  
    const { unit } = req.body;

    if (!unit) {
        return res.status(400).json({ error: 'Unit field is required' });
    }

    try {
        const formData = new CourseSelection({ unit });
        await formData.save();
        res.status(200).json({
            message: 'Form submitted successfully',
            data: formData
        });
    } catch (err) {
        console.error('Error submitting form:', err);
        res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
};
