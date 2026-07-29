from pathlib import Path

import fitz  # PyMuPDF
import docx





# =========================
# Extract PDF Text
# =========================

def extract_pdf_text(file_path: str) -> str:


    text = ""


    document = fitz.open(file_path)


    for page in document:

        text += page.get_text()



    document.close()


    return text









# =========================
# Extract DOCX Text
# =========================

def extract_docx_text(file_path: str) -> str:


    document = docx.Document(file_path)


    text = []


    for paragraph in document.paragraphs:

        text.append(
            paragraph.text
        )



    return "\n".join(text)









# =========================
# Resume Parser
# =========================

def extract_resume_text(file_path: str) -> str:


    extension = Path(file_path).suffix.lower()



    if extension == ".pdf":


        return extract_pdf_text(
            file_path
        )




    elif extension == ".docx":


        return extract_docx_text(
            file_path
        )




    else:


        raise ValueError(

            "Unsupported resume format"

        )