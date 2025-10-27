import os
from glob import glob
from pypdf import PdfReader 
# Import the specific error type from pypdf for robust error handling
from pypdf.errors import PdfReadError 
    
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
failed_documents = [] # Initialize list to track failures
    
print(f"Searching for PDFs in: {pdf_dir}")
print(f"Found {len(pdf_files)} PDFs to process.")
    
for pdf_path in pdf_files:
    pdf_filename = os.path.basename(pdf_path)
    try:
        print(f"-> Starting extraction for: {pdf_filename}")
        
        # --- PYPDF IMPLEMENTATION ---
        # The float conversion error usually happens inside PdfReader initialization or extraction.
        reader = PdfReader(pdf_path) 
        txt = ""
        
        # Iterate over all pages and extract text
        for page in reader.pages:
            # .extract_text() is the pypdf equivalent of page.get_text()
            txt += page.extract_text() or "" # Use 'or ""' to handle empty page text gracefully
            
        combined_text += f"\n\n--- FILE: {pdf_filename} ---\n\n"
        combined_text += txt
            
        print(f"   Successfully extracted text from: {pdf_filename}")
            
    except (PdfReadError, ValueError) as e:
        # Catches the specific 'could not convert string to float' (a ValueError) 
        # and other common PDF structural errors.
        print(f"!!! CRITICAL ERROR: Could not process {pdf_filename}. Document skipped.")
        print(f"    Error detail: {e}")
        failed_documents.append(pdf_filename) # Track the failed file
        
    except Exception as e:
        # Catch any other unexpected error
        print(f"!!! UNEXPECTED ERROR processing {pdf_filename}: {e}")
        failed_documents.append(pdf_filename) # Track the failed file
            
# 4. Final Report of Failed Documents (MOVED TO HERE)
if failed_documents:
    print("\n--- FAILED DOCUMENTS REPORT ---")
    print(f"WARNING: {len(failed_documents)} document(s) were skipped due to errors and ARE NOT included in the combined text:")
    for doc in failed_documents:
        print(f"  - {doc}")
    print("Please review these files for corruption or non-standard formatting.")
        
# 5. Save the massive combined string to a file (RENUMBERED)
try:
    with open(output_file_path, 'w', encoding='utf-8') as f:
        f.write(combined_text)
    print("\n--- OUTPUT SAVED SUCCESSFULLY ---")
    print(f"The combined text has been saved to: {output_file_path}")
    print("Open this file, copy its content, and paste it into policy_documents.js.")
except Exception as e:
    print(f"\nError writing to output file: {e}")
