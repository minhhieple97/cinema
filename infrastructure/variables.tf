variable "prefix" {
  default = "cinema-react-eddie"
}

variable "project" {
  default = "cinema-react-app"
}
locals {
  prefix = "${var.prefix}-${terraform.workspace}"
}