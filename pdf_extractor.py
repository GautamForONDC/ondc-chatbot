import os
from glob import glob
from pypdf import PdfReader # Use the modern pypdf library
    
# Get the directory where this script is located
script_dir = os.path.dirname(os.path.abspath(__file__))

# 1. Define the directory where your actual PDF files are stored, 
# relative to the script's location.
pdf_dir = os.path.join(script_dir, "NetworkPolicy")
    
# 2. Define the output file path
output_file_path = os.path.join(script_dir, "combined_policy_text.txt")

# 3. Find all PDF files
pdf_files = glob(os.path.join(pdf_dir, "*.pdf"))
    
combined_text = ""
    
print(f"Searching for PDFs in: {pdf_dir}")
print(f"Found {len(pdf_files)} PDFs to process.")
    
for pdf_path in pdf_files:
    try:
        # --- PYPDF IMPLEMENTATION ---
        reader = PdfReader(pdf_path)
        txt = ""
        
        # Iterate over all pages and extract text
        for page in reader.pages:
            # .extract_text() is the pypdf equivalent of page.get_text()
            txt += page.extract_text() or "" # Use 'or ""' to handle empty page text gracefully
            
        combined_text += f"\n\n--- FILE: {os.path.basename(pdf_path)} ---\n\n"
        combined_text += txt
            
        print(f"Successfully extracted text from: {pdf_path}")
            
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
            
# 4. Save the massive combined string to a file
# This replaces printing to the console for easier copying.
try:
    with open(output_file_path, 'w', encoding='utf-8') as f:
        f.write(combined_text)
    print("\n--- OUTPUT SAVED SUCCESSFULLY ---")
    print(f"The combined text has been saved to: {output_file_path}")
    print("Open this file, copy its content, and paste it into src/policy_documents.js.")
except Exception as e:
    print(f"\nError writing to output file: {e}")
