import os
from dotenv import load_dotenv
import google.generativeai as genai


load_dotenv()


genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)


models = genai.list_models()


for model in models:
    print("----------------------")
    print(model.name)
    print(model.supported_generation_methods)