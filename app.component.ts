import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions, FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  today = new Date();
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  pagefields: FormlyFieldConfig[] = [
    {
      key: "Select Page",
      type: "select",
      templateOptions: {
        label: "Select Page",
        required: true,
        class: "right",
        options: [{ value: 1, label: "Voyager - eDealer spreads" }]
      }
    }
  ];
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          className: "col-sm-4",
          key: "Source System",
          type: "select",
          templateOptions: {
            label: "Source System",
            required: true,
            options: [
              { value: 1, label: "Option 1" },
              { value: 2, label: "Option 2" },
              { value: 3, label: "Option 3" },
              { value: 4, label: "Option 4" }
            ]
          }
        },
        {
          className: "col-sm-4",
          key: "Sub Source System",
          type: "select",
          templateOptions: {
            label: "Sub Source System",
            options: [
              { value: 1, label: "Option 1" },
              { value: 2, label: "Option 2" },
              { value: 3, label: "Option 3" },
              { value: 4, label: "Option 4" }
            ]
          }
        }
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          className: "col-sm-4",
          key: "Branch",
          type: "input",
          templateOptions: {
            label: "Branch",
            required: true,
          }
        },
        {
          className: "col-sm-4",
          key: "Base Number",
          type: "input",
          templateOptions: {
            label: "Base Number",
            required: true,
          }
        }
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          className: "col-sm-4",
          key: "AsOf Date",
          type: "datepicker",
          templateOptions: {
            label: "AsOf Date"
          }
        },
        {
          className: "col-sm-4",
          key: "Value Date",
          type: "datepicker",
          templateOptions: {
            label: "Value Date",
            // required: true,
          }
        },
        {
          className: "col-sm-4",
          key: "Tenor",
          type: "select",
          templateOptions: {
            label: "Tenor",
            // required: true,
            options: [
              { value: 1, label: "Option 1" },
              { value: 2, label: "Option 2" },
              { value: 3, label: "Option 3" },
              { value: 4, label: "Option 4" }
            ]
          }
        }
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          className: "col-sm-4",
          key: "BuyCCY",
          type: "select",
          templateOptions: {
            label: "BuyCCY",
            required: true,
            options: [
              { value: 1, label: "USD" },
              { value: 2, label: "INR" },
              { value: 3, label: "EUR" }
            ]
          }
        },
        {
          className: "col-sm-4",
          key: "SellCCY",
          type: "select",
          templateOptions: {
            label: "SellCCY",
            required: true,
            options: [
              { value: 1, label: "USD" },
              { value: 2, label: "INR" },
              { value: 3, label: "EUR" }
            ]
          }
        },
        {
          className: "col-sm-4",
          key: "BuyOrSell",
          type: "select",
          templateOptions: {
            label: "BuyOrSell",
            options: [{ value: 1, label: "Buy" }, { value: 2, label: "Sell" }],
            required: true,
          }
        }
      ]
    },
    {
      fieldGroupClassName: "display-flex",
      fieldGroup: [
        {
          className: "col-sm-4",
          key: "Amount",
          type: "input",
          templateOptions: {
            label: "Amount",
            required: true,
          }
        },
        {
          className: "col-sm-4",
          key: "SpotRate",
          type: "input",
          templateOptions: {
            label: "SpotRate"
          }
        },
        {
          className: "col-sm-4",
          key: "FwdPoints",
          type: "input",
          templateOptions: {
            label: "FwdPoints"
          }
        }
      ]
    },
    {
      fieldGroupClassName: "display-table",
      fieldGroup: []
    }
  ];

  submit() {
    if (this.form.valid) {
      console.log(JSON.stringify(this.model));
    }
  }

  columnDefs = [
    {
      field: "SpreadType",
      width: 150,
      suppressSizeToFit: true,
      headerTooltip: "SpreadType"
    },
    { field: "Spreadpercentspot", headerTooltip: "Spreadpercentspot" },
    { field: "SpreadpercentFWD", headerTooltip: "SpreadpercentFWD" },
    { field: "Dealrate", headerTooltip: "Dealrate" },
    { field: "Spotdealrate", headerTooltip: "Spotdealrate" },
    { field: "Commision", headerTooltip: "Commision" },
    { field: "Spotspread", headerTooltip: "Spotspread" },
    { field: "FWDspread", headerTooltip: "FWDspread" },
    { field: "Buyamount", headerTooltip: "Buyamount" },
    { field: "Sellamount", headerTooltip: "Sellamount" }
  ];

  rowData = [
    {
      SpreadType: "Percentage",
      Spreadpercentspot: "1.4",
      SpreadpercentFWD: "2.1",
      Dealrate: "1.34",
      Spotdealrate: "1.43",
      Commision: "0.003",
      Spotspread: "1.32",
      FWDspread: "1.23",
      Buyamount: "1000",
      Sellamount: "1100"
    }
  ];

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
  /* AG Grid old data code 
  columnDefs = [
    { field: 'CategoryType', resizable: true },
    { field: 'Percentage', resizable: true },
    { field: 'Pips', resizable: true },
    { field: 'Percentageccypair' }
  ];

  rowData = [
    { CategoryType: 'Spread percent spot', Percentage: '1.4', Pips: '0', Percentageccypair: '0' },
    { CategoryType: 'Spread percent FWD', Percentage: '2.1', Pips: '0', Percentageccypair: '0' },
    { CategoryType: 'Bit spot', Percentage: '0', Pips: '2', Percentageccypair: '1.4' },
    { CategoryType: 'Offer spot', Percentage: '0', Pips: '2', Percentageccypair: '1.4' },
    { CategoryType: 'Bit FWD', Percentage: '0', Pips: '2', Percentageccypair: '1.4' },
    { CategoryType: 'Offer FWD', Percentage: '0', Pips: '2', Percentageccypair: '1.4' },
    { CategoryType: 'Deal rate', Percentage: '1.34', Pips: '1.34', Percentageccypair: '1.34' },
    { CategoryType: 'Spot deal rate', Percentage: '1.43', Pips: '1.43', Percentageccypair: '1.43' },
    { CategoryType: 'Commision', Percentage: '0.003', Pips: '0.003', Percentageccypair: '0.003' },
    { CategoryType: 'Spot spread ', Percentage: '1.32', Pips: '1.32', Percentageccypair: '1.32' },
    { CategoryType: 'FWDspread', Percentage: '1.23', Pips: '1.23', Percentageccypair: '1.23' },
    { CategoryType: 'Buy amount', Percentage: '1000', Pips: '1000', Percentageccypair: '1000' },
    { CategoryType: 'Sell amount', Percentage: '1100', Pips: '1102', Percentageccypair: '1101' },
  ];*/
}
