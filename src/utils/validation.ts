// Define interfaces for the form data
interface BookingFormData {
  articleId?: string;
  startDate?: string;
  endDate?: string;
  customizationNotes?: string;
}

// Define interfaces for error objects
interface BookingFormErrors {
  articleId?: string;
  startDate?: string;
  endDate?: string;
  customizationNotes?: string;
}

interface ClothingArticleData {
  name?: string;
  price?: number;
  imageUrl?: string;
}

interface ClothingArticleErrors {
  name?: string;
  price?: string;
  imageUrl?: string;
}

export const validateBookingForm = (formData: BookingFormData) => {
  const errors: BookingFormErrors = {};

  if (!formData.articleId) {
    errors.articleId = "Article selection is required.";
  }

  if (!formData.startDate) {
    errors.startDate = "Start date is required.";
  } else if (new Date(formData.startDate) < new Date()) {
    errors.startDate = "Start date cannot be in the past.";
  }

  if (!formData.endDate) {
    errors.endDate = "End date is required.";
  } else if (
    formData.startDate &&
    formData.endDate &&
    new Date(formData.endDate) <= new Date(formData.startDate)
  ) {
    errors.endDate = "End date must be after the start date.";
  }
  if (formData.customizationNotes && formData.customizationNotes.length > 200) {
    errors.customizationNotes =
      "Customization notes cannot exceed 200 characters.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateClothingArticle = (articleData: ClothingArticleData) => {
  const errors: ClothingArticleErrors = {};

  if (!articleData.name) {
    errors.name = "Article name is required.";
  }

  if (!articleData.price || articleData.price <= 0) {
    errors.price = "Price must be a positive number.";
  }

  if (!articleData.imageUrl) {
    errors.imageUrl = "Image URL is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
