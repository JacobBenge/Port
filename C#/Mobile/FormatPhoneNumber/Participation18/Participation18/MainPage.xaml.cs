using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace Participation18
{
    public partial class MainPage : ContentPage
    {
        const int MAX_FORMATTED_NUM = 14;
        const int MAX_UNFORMATED_NUM = 10;

        public MainPage()
        {
            InitializeComponent();
        }

        private void BtnFormat_Clicked(object sender, EventArgs e)
        {
            string number = EntryPhoneNumber.Text;

            if (ValidFormatInput(number))
            {
                FormatPhoneNumber(ref number);
                LblResults.Text = number;
            }
        }

        private void FormatPhoneNumber(ref string number)
        {
            number = number.Insert(0, "(");
            number = number.Insert(4, ") ");
            number = number.Insert(9, "-");
        }

        private bool ValidFormatInput(string number)
        {
            if (number.Length == MAX_UNFORMATED_NUM)
            {
                foreach (char num in number)
                {
                    if (!char.IsDigit(num))
                    {
                        DisplayAlert("Invalid Input", "Please ONLY enter 10 numbers for phone number", "Close");
                        return false;
                    }
                }
                return true;
            }
            else
            {
                DisplayAlert("Invalid Input", "Please enter 10 numbers for phone number", "Close");
                return false;
            }
        }

        private void BtnUnFormat_Clicked(object sender, EventArgs e)
        {
            string number = EntryPhoneNumber.Text;

            if (ValidUnformatNumber(number))
            {
                UnformatNumber(ref number);
                LblResults.Text = number;
            }
        }

        private bool ValidUnformatNumber(string number)
        {
            if (number[0] == '(' 
                && number[4] == ')' 
                && number[5] == ' ' 
                && number[9] == '-' 
                && number.Length == MAX_FORMATTED_NUM
                && char.IsDigit(number[1])
                && char.IsDigit(number[2])
                && char.IsDigit(number[3])
                && char.IsDigit(number[6])
                && char.IsDigit(number[7])
                && char.IsDigit(number[8])
                && char.IsDigit(number[10])
                && char.IsDigit(number[11])
                && char.IsDigit(number[12])
                && char.IsDigit(number[13])
                )
            {
                return true;
            }
            else
            {
                DisplayAlert("Invalid Input","Please enter a valid phone number. (ex. (801) 888-8888)","Close");
                return false;
            }
        }

        private void UnformatNumber(ref string number)
        {
            number = number.Remove(0,1);
            number = number.Remove(3,2);
            number = number.Remove(6,1);
        }
    }
}
