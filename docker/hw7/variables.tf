variable "bucket_name" {
  description = "Name of the S3 bucket"
  type        = string
  default     = "150424-bucket-vadym"
}

variable "environment" {
  description = "Environment tag value"
  type        = string
  default     = "development"
} 
