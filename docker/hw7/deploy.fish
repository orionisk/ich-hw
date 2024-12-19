#!/usr/bin/env fish

function handle_error
    echo "Error occurred on line $argv[1]"
    exit 1
end

echo "Initializing Terraform..."
terraform init || handle_error $status

echo -e "\nPlanning Terraform changes..."
terraform plan -out=tfplan || handle_error $status

echo -e "\nApplying Terraform changes..."
terraform apply tfplan | tee apply-output.txt || handle_error $status

rm tfplan

echo -e "\nPress Enter when ready to destroy resources, or Ctrl+C to cancel..."
read

echo -e "\nDestroying resources..."
terraform destroy -auto-approve | tee destroy-output.txt || handle_error $status

echo -e "\nProcess completed successfully!"
echo "Apply output has been saved to apply-output.txt"
echo "Destroy output has been saved to destroy-output.txt"
