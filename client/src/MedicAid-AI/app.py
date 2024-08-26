import json
import streamlit as st
from pathlib import Path
import google.generativeai as genai
from api_key import api_key
from streamlit_lottie import st_lottie
import requests

# Configure genai with api_key
genai.configure(api_key=api_key)

# Setup the model
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

# Setup the Safety System
safety_settings = [
    {"category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
    {"category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE"},
]

# Creating a variable for the prompt
system_prompt = """
As a highly skilled medical practitioner specializing in image analysis, you are tasked with examining the medical images for a renowned hospital. Your expertise is crucial in identifying any anomalies, diseases, or health issues that may be present in the images.

Your responsibilities include:
1. Detailed Analysis: Thoroughly analyze each image, focusing on identifying any abnormal findings.
2. Findings Reports: Document all observed anomalies or signs of disease. Clearly articulate these findings in a structured format.
3. Recommendations and Next Steps: Based on your analysis, suggest potential next steps, including further tests or treatments as applicable.
4. Treatment Suggestions: If appropriate, recommend possible treatment options or interventions.

Important Notes:
1. Scope of Response: Only respond if the image pertains to human health issues.
2. Clarity of Image: In cases where the image quality impedes clear analysis, note that certain aspects are 'Unable to be determined based on the provided image.'
3. Disclaimer: Accompany your analysis with the disclaimer: "Consult with a Doctor before making any decisions."

Your insights are invaluable in guiding clinical decisions. Please proceed with the analysis, adhering to the structured approach outlined above.

Please note that this is an automated system and may not be 100% accurate. Please review the findings and recommendations carefully.
"""

# Model Configuration
model = genai.GenerativeModel(
    model_name="gemini-1.5-flash-latest",
    safety_settings=safety_settings,
    generation_config=generation_config,
)

# Set the page configuration
st.set_page_config(page_title="MedicAid Image Analytics", page_icon=":robot:", layout="wide")

# Custom CSS to change the background color
page_bg_css = """
<style>
[data-testid="stAppViewContainer"] {
    background-color: #c4ebe4;
}
</style>
"""
# Inject the custom CSS into the Streamlit app
st.markdown(page_bg_css, unsafe_allow_html=True)


# Create a sidebar for navigation
st.sidebar.title("Navigation")

page = st.sidebar.radio("Select Page", ["Home", "MedicAid AI"])

st.sidebar.subheader("\n\nMedicaid is your go-to platform for all things healthcare, offering seamless access to essential information, resources, and tools designed to help you navigate the complexities of Medicaid with ease.")
st.sidebar.subheader("\n\n\nWhether you're seeking guidance on eligibility, understanding benefits, or staying updated on the latest healthcare policies, Medicaid empowers you to make informed decisions, ensuring you and your loved ones receive the care you deserve.")
st.sidebar.subheader("\n\n\nAffordable Care, Quality Service – That’s Medicaid.")

if page == "MedicAid AI":
    # Load the image
    image_path = "MedicAidLogo.jpeg"

    # Define the CSS to make the image round
    round_logo_css = """
    <style>
        .stImage > img {
            border-radius: 50%;
            width: 100px; /* Adjust the width as needed */
        }
    </style>
    """

    # Inject the custom CSS
    st.markdown(round_logo_css, unsafe_allow_html=True)

    # Display the image using Streamlit's st.image
    st.image(image_path, width=100)
    # Set the page title
    st.title("MedicAid Image Analyzer🩺")

    # Set the subtitle for the page
    st.subheader("MedicAid presents you an AI Medical Assistant named as MedicAid Image Analyzer which allows you to identify your medical or health related issues through images")

    # Custom CSS to change the background color
    page_bg_css = """
    <style>
    [data-testid="stAppViewContainer"] {
        background-color: #c4ebe4;
    }
    </style>
    """
    # Inject the custom CSS into the Streamlit app
    st.markdown(page_bg_css, unsafe_allow_html=True)
    # Set the upload image section for the page
    upload_image = st.file_uploader("Upload the image for analysis", type=["png", "jpg", "jpeg"])
    if upload_image:
        st.image(upload_image, width=250, caption="Uploaded Medical Images")
    submit_button = st.button("Generate the analysis")

    if submit_button and upload_image is not None:
        # Process the uploaded image
        image_data = upload_image.getvalue()
    
        # Making our Image Ready
        image_part = {
            "inline_data": {
                "mime_type": upload_image.type,
                "data": image_data
            }
        }

        # Making our Prompt Ready
        prompt_part = {
            "text": system_prompt
        }

        # Combining both parts into the required format
        prompt_parts = {
            "parts": [
                prompt_part,
                image_part
            ]
        }

        # Generating the response based on the image and the prompt
        response = model.generate_content(prompt_parts)
        st.write(response.text)
    

elif page == "Home":
    
    def load_lottiefile(filepath:str):
        with open(filepath, "r") as f:
            return json.load(f)
        
    def load_lottieurl(url: str):
        r = requests.get(url)
        if r.status_code != 200:
            return None
        return r.json()
    lottie_coding = load_lottiefile("Hello2.json")
    st_lottie(
        lottie_coding,
        speed=1,
        reverse=False,
        loop=True,
        quality="high",
        height="190px",
        width="100%",
        key="hello2"
        )
    
    # Inject the custom CSS into the Streamlit app
    st.markdown(page_bg_css, unsafe_allow_html=True)

    st.title('Welcome to MedicAid Image Analyzer🩺')
    st.markdown("From Query to Cure, We Make Health Secure")
       # Set the subtitle for the page
    st.subheader("\n\nMedicAid presents you an AI Medical Assistant named as MedicAid Image Analyzer which allows you to identify your medical or health related issues through images")