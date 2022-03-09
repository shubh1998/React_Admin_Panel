import React from 'react'
import { CustomTable } from '../../../components/ui-kit/compounds/Table/CustomTable'

const sampleData = {

  salesColumns: [
    {
      id: 1,
      label: 'Product',
      value: 'product',
      type: 'product',
      isMobFullWidRow: true
    },
    {
      id: 2,
      label: 'Purchased On',
      value: 'purchased_on',
      type: 'date',
      isMobileColumn: true
    },
    {
      id: 3,
      label: 'Buyer',
      value: 'buyer',
      type: 'buyer',
      isMobileColumn: true
    },
    {
      id: 4,
      label: 'Price',
      value: 'price',
      type: 'price',
      isMobileColumn: true
    },
    {
      id: 5,
      label: 'Due By',
      value: 'due_by',
      type: 'date'
    },
    {
      id: 6,
      label: 'Payment date',
      value: 'payment_date',
      type: 'paymentDate'
    },
    {
      id: 8,
      label: 'Status',
      value: 'status',
      type: 'status'
    },
    {
      id: 9,
      label: 'Switch',
      value: 'switch',
      type: 'switch'
    }
  ],
  salesRows: [
    {
      id: 1,
      product: 'product',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      incomingMessage: 1,
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    },
    {
      id: 2,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: false,
      switch: {
        switchValue: true
      }
    },
    {
      id: 3,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    },
    {
      id: 4,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: false,
      switch: {
        switchValue: true
      }
    },
    {
      id: 5,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    },
    {
      id: 6,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: false,
      switch: {
        switchValue: true
      }
    },
    {
      id: 7,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    }
  ]
}

export const PreRoundReport = () => {
  return (
    <>

      <CustomTable
        rows={sampleData.salesRows}
        header={sampleData.salesColumns}
      />
      <br /><br />
      <CustomTable
        rows={sampleData.salesRows}
        header={sampleData.salesColumns}
        type='static'
      />
    </>
  )
}
