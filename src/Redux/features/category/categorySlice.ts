import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import {
  addcategory,
  delcategory,
  listcategory,
  updateCategory,
} from "../category/cetegoryApi";
import { category, categoryState } from "../../types/category.types";

const initialState: categoryState = {
  name: "",
  description: "",
  isCategory: false,
  message: "",
  datacategory: [],
  _id: "",
};

export const cetegorytambah = createAsyncThunk(
  "categories/add",
  async (data: { name: string; description: string }, { rejectWithValue }) => {
    try {
      const response = await addcategory(data);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Menambahkan Category");
    }
  }
);

export const dataCategory = createAsyncThunk(
  "categories/listdata",
  async (_, { rejectWithValue }) => {
    try {
      const response = await listcategory();
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Mengambil Data Kategori");
    }
  }
);

export const deletecategory = createAsyncThunk(
  "categories/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await delcategory(id);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Menghapus Kategori");
    }
  }
);

export const updatecategory = createAsyncThunk(
  "categories/update",
  async ({ id, data }: { id: string; data: { name: string; description: string } }, { rejectWithValue }) => {
    try {
      const response = await updateCategory(id, data);
      if (response.success) {
        return response.data;
      } else {
        return rejectWithValue(response.message);
      }
    } catch (error) {
      return rejectWithValue("Gagal Memperbarui Kategori");
    }
  }
);


const categorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(cetegorytambah.fulfilled, (state) => {
        state.isCategory = true;
        state.message = "Berhasil Menambahkan Category";
      })
      .addCase(cetegorytambah.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(dataCategory.fulfilled, (state, action) => {
        state.datacategory = action.payload;
        state.message = "Berhasil Mengambil Data Kategori";
      })
      .addCase(dataCategory.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(deletecategory.fulfilled, (state, action) => {
        state.datacategory = state.datacategory.filter(
          (category: category) => category._id !== action.payload
        );
        state.message = "Berhasil Menghapus Kategori";
      })
      .addCase(deletecategory.rejected, (state, action) => {
        state.message = action.payload as string;
      })
      .addCase(updatecategory.fulfilled, (state, action) => {
        state.datacategory = state.datacategory.map((category) =>
          category._id === action.payload._id ? action.payload : category
        );
        state.message = "Berhasil Memperbarui Kategori";
      })
    .addCase(updatecategory.rejected, (state, action) => {
      state.message = action.payload as string;
    });

},
});

export const { setName, setDescription, setMessage } = categorySlice.actions;
export default categorySlice.reducer;
