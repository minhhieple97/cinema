provider "aws" {
  region = "ap-southeast-1"
}

terraform {
  backend "s3" {
    bucket  = "cinema-project-tf-state"
    key     = "cinema-project.tfstate"
    region  = "ap-southeast-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "hieple"
  }
}

